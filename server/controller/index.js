import bcrypt from "bcrypt";
import User from "../Models/User.js";
import Portal from "../Models/Portal.js";
import { generateToken } from "../service/tokenService.js";

// signup
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log({ name, email, password });
  try {
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ error: "User already exists with the same email." });
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);

    await User.create({ name, email, password: hashedPassword });

    return res.status(200).json({
      message: "user registered successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

//signin
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const hashedPassword = await user.password;
    const isPasswordCorrect = await bcrypt.compareSync(
      password,
      hashedPassword
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "wrong email or password",
      });
    }

    const accessToken = generateToken(user._id);
    return res.status(200).json({
      user,
      accessToken,
      message: "signed in successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

//creating portal
export const createPortal = async (req, res) => {
  const { appCode, projectId, modelId, version, title, desc } = req.body;
  const createdBy = req._id;

  try {
    const portal = await Portal.create({
      appCode,
      projectId,
      modelId,
      version,
      title,
      desc,
      createdBy,
    });

    return res
      .status(200)
      .json({ portal, message: "portal created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

//get all portal
export const getPortal = async (req, res) => {
  try {
    const allPortal = await Portal.find({}).populate("createdBy", "name");

    return res.status(200).json({ allPortal });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

//updating portal
export const updatePortal = async (req, res) => {
  const portalId = req.params.id;

  try {
    const portal = await Portal.findByIdAndUpdate(
      portalId,
      { $set: req.body },
      { new: true }
    ).populate("createdBy", "name");

    return res.status(200).json({
      portal,
      message: "updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

//deleting portal
export const deletePortal = async (req, res) => {
  const portalId = req.params.id;

  try {
    await Portal.findByIdAndDelete(portalId);
    return res.status(200).json({
      message: "portal deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
