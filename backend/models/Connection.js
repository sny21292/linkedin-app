const supabase = require("../config/db");

const Connection = {
  async sendRequest(senderId, receiverId) {
    const { data, error } = await supabase
      .from("connections")
      .insert({ sender_id: senderId, receiver_id: receiverId, status: "pending" })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async accept(connectionId) {
    const { data, error } = await supabase
      .from("connections")
      .update({ status: "accepted" })
      .eq("id", connectionId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async reject(connectionId) {
    const { error } = await supabase
      .from("connections")
      .delete()
      .eq("id", connectionId);

    if (error) throw error;
  },

  async findByUserId(userId) {
    const { data, error } = await supabase
      .from("connections")
      .select("*, sender:users!sender_id(*), receiver:users!receiver_id(*)")
      .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
      .eq("status", "accepted");

    if (error) throw error;
    return data;
  },

  async findPendingForUser(userId) {
    const { data, error } = await supabase
      .from("connections")
      .select("*, sender:users!sender_id(*)")
      .eq("receiver_id", userId)
      .eq("status", "pending");

    if (error) throw error;
    return data;
  },
};

module.exports = Connection;
