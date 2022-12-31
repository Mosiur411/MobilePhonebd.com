import UserModal from "../../../modal/userInfoModal";
import connectDatabase from "../../../utils/bd";
const CreateUser = async (req, res) => {
    try {
        await connectDatabase()
        const user = req.body;
        const CheckEmail = req.body.email;
        const data = await UserModal.findOne({ email: CheckEmail })
        if (data) {
            return res.status(200).json({ data: data })
        }
        if (data == null) {
            const userInfo = await UserModal(user)
            if (!userInfo) return res.status(404).json({ error: "NeedData not exists" })
            const result = await userInfo.save()
            return res.status(200).json({ data: result })
        }
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}

export default CreateUser;
