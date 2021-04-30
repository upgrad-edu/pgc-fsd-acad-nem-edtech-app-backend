const db = require("../models");
const Enrollment = db.enrollments;

// Create and Save a user
exports.enroll = (req, res) => {
  // Validate request
  if (!req.body.userId && !req.body.courseId) {
    res.status(400).send({ message: "Enrollment should have loggedIn UserId and CourseId" });
    return;
  }

  // Create a new enrollment
  const enrollment = new Enrollment({
    userId: req.body.userId,
    courseId: req.body.courseId,
  });

  // Save User in the database
  enrollment
    .save(enrollment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Enrollment error occurred, please try again later."
      });
    });
};
