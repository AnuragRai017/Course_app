router.post('/profile', auth, async (req, res) => {
  try {
    const {
      dob,
      city,
      country,
      education,
      department,
      occupation,
      pincode,
      address
    } = req.body;

    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        {
          $set: {
            dob,
            city,
            country,
            education,
            department,
            occupation,
            pincode,
            address
          }
        },
        { new: true }
      );
    } else {
      // Create
      profile = new Profile({
        user: req.user.id,
        dob,
        city,
        country,
        education,
        department,
        occupation,
        pincode,
        address
      });

      await profile.save();
    }

    res.json({ success: true, profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
}); 