import UserModal from "../../../modal/userInfoModal"
import connectDatabase from "../../../utils/bd"

const DeleteUser = async (req, res) => {
    try {
        await connectDatabase()
        const ID = req.body.Id
        if (!ID) return res.status(403).json({ error: 'NeedData does not exists.' })
        const deleted = await UserModal.deleteOne({ _id: ID })
        return res.status(200).json({ deleted })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default DeleteUser;

