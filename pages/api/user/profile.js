import UserModal from "../../../modal/userInfoModal"
import connectDatabase from "../../../utils/bd"
const UpdateUser = async (req, res) => {
    try {
        await connectDatabase()
        const ID = req.body._id
        if (ID) {
            const data = req.body
            const userUpdate = await UserModal.findByIdAndUpdate(ID, data, { new: true })
            if (!userUpdate) return res.status(404).json({ error: "NeedData not exists" })
            const result = await userUpdate.save()
            return res.status(200).json({ result })
        }
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default UpdateUser;