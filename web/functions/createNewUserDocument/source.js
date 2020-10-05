exports = async function createNewUserDocument({ user }) {
  const cluster = context.services.get("mongodb-atlas");
  const users = cluster.db("tracker").collection("users");
  return await users.insertOne({
    _id: user.id,
    _partition: "My Project",
    name: user.data.email,
  });
};