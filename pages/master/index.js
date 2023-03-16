import Container from "../../components/Container";
import TitleHeader from "../../components/TitleHeader";
import ButtonMenu from "../../components/button/button-menu";

function Home() {

    return (
        <Container>

            <TitleHeader title={"MENU"} category={"Master"}/>
            <nav className="bg-white border-gray-200 ">
                <div id="mega-menu-full-dropdown"
                     className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y ">
                    <div
                        className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900  sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <ButtonMenu link={"master/attendance/user"} title={"Master Employee"} subtitle={"Edit dan tambah employee"}/>
                            </li>
                            <li>
                                <ButtonMenu  link={"master/event"} title={"Setting"} subtitle={"Edit dan tambah Event"}/>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <ButtonMenu link={"master/event"} title={"Master Event"} subtitle={"Edit dan tambah Event"}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </Container>
    )
}

export default Home