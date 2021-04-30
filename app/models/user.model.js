module.exports = mongoose => {
  const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          firstName: String,
          lastName: String,
          email: { type : String , unique : true, required : true , dropDups: true},
          password: String,
          role: {type: String, default: 'user'}, /*types: admin ,user*/
          isLoggedIn: Boolean
        },
        { timestamps: true }
      )
    );
  
    return User;
  };