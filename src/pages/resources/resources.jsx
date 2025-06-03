
import { BookOpen, BookText, LightbulbIcon } from "lucide-react"
import { useState } from "react"
import { motion } from 'framer-motion'

export const Resources = () => {
    const [activeTab, setActiveTab] = useState("news")
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

            <div className="text-center mb-5">
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

            <motion.div
                key={activeTab}
                initial = "hidden"
                animate = "visible"
                className="bg-white rounded-xl shadow-md p-6 sm:p-8"
                variants = {currentTabs}
            >
                {activeTab === "nwws" && <EducationTab/>}
                {activeTab === "books" && <RecommendedBooks/>}
                {activeTab === "tips" && <LearningTips/>}
                
            </motion.div>
        </div>                        
    </div>
}  

const currentTabs = {
    hidden: {opacity: 0.7},
    visible: {opacity: 1.1},
    transition: {duration: 0.5, ease: "easeOut"}
}

const EducationTab = () => {
    <div>
        This is the Education Tab
    </div>
}

const RecommendedBooks = () => {
    <div>
        This is the Recommended Books section
    </div>
}

const LearningTips = () => {
    <div>
        This is the Learning Tips section
    </div>
}

const tabVariants =  {
    inactive: {opacity: 0.7},
    active: {
        opacity: 1.0,
        scale: 1.10,
        transition: {type: "spring", stiffness: 1000, damping:30}
    } 
}

const TabButton = ({isActive, onClick, label, icon}) => {
    return <motion.button
        variants = {tabVariants}
        initial = "inactive"
        animate = {isActive ? "active" : "inactive"}
        onClick = {onClick}
        className = {`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-200 whitespace-nowrap ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-900 hover:text-gray-700 hover:bg-gray-50"} hover:cursor-pointer`}
    >
        {icon}
        <span className="hidden sm:inline">{label}</span>
    </motion.button>
}
