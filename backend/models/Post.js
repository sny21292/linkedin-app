const supabase = require("../config/db");

const Post = {
  async create({ userId, content, imageUrl }) {
    const { data, error } = await supabase
      .from("posts")
      .insert({ user_id: userId, content, image_url: imageUrl })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async findAll({ limit = 20, offset = 0 } = {}) {
    const { data, error } = await supabase
      .from("posts")
      .select("*, users(id, name, headline, profile_picture)")
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return data;
  },

  async findById(id) {
    const { data, error } = await supabase
      .from("posts")
      .select("*, users(id, name, headline, profile_picture)")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id, userId) {
    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", id)
      .eq("user_id", userId);

    if (error) throw error;
  },
};

module.exports = Post;
