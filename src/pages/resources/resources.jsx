
import { BookOpen, BookText, LightbulbIcon } from "lucide-react"
import { useState } from "react"

export const Resources = () => {
    const [activeTab, setActiveTab] = useState("news")
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Learning Resources
                </h1>
                <p className="text-slate-700 font-semibold tracking-wide">
                    Discover curated educational materials to enhance your learning journey
                </p>
            </div>

            <div className="flex justify-center">   
                <div className="bg-white rounded-xl shadow-md p-2 gap=2">
                    <TabButton
                            isActive = {activeTab === "news"}
                            onClick = {() => setActiveTab("news")}
                            icon={<BookText size={20}/>}
                            label = "Educational News"
                    />
                    <TabButton
                            isActive = {activeTab === "books"}
                            onClick = {() => setActiveTab("books")}
                            icon={<BookOpen size={20}/>}
                            label = "Recommended Books"
                    />
                    <TabButton
                            isActive = {activeTab === "tips"}
                            onClick = {() => setActiveTab("tips")}
                            icon={<LightbulbIcon size={20}/>}
                            label = "Learning tips"
                    />
                </div>
            </div>
        </div>                        
    </div>
}  

const TabButton = ({isActive, onClick, label, icon}) => {
    return <div>
        {icon}
        <span className="hidden sm:inline">{label}</span>
    </div>
}
