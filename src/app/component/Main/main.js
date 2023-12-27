import Sidebar from "../Sidebar/sidebar"
import Header from "../Header/header"
import '@/app/component/Main/main.css'

export default function main() {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <Header></Header>
        </div>
    )
  }