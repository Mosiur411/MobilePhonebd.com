import UserModal from "../../../modal/userInfoModal"
import connectDatabase from "../../../utils/bd"

const GetUser = async (req, res) => {
    try {
        await connectDatabase()
        const data = await UserModal.find({})
        return res.status(200).json({ data })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default GetUser;