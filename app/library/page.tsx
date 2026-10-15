import "./style.css"

export default async function LibraryPage() {
    return(
        <div className="w-full h-screen flex">
            <div className="h-200 w-150 mt-auto ml-20 mb-auto bg-[#00000098]">
                
            </div>
            <div className="shelves w-full h-200 pb-5 pl-5 pr-5 mr-30 ml-10 mt-auto mb-auto border-3 gap-3">
                <div className="w-min flex align-end h-100 bg-amber-200">
                    <div className="book w-min h-min">
                        <img src="/books/eotw.jpg" width={"1400px"} height={"2544px"} className="bookImg max-w-30 rounded" />
                        <div className="opacObj"></div>
                    </div>
                </div>
                <div className="flex-col w-min">
                    <div className="book w-min h-min">
                        <img src="/books/tgh.jpg" width={"1400px"} height={"2544px"} className="bookImg max-w-30 rounded" />
                        <div className="opacObj"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

