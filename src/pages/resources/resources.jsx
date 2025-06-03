
import { BookOpen, BookText, LightbulbIcon } from "lucide-react"
import { useState } from "react"
import { motion } from 'framer-motion'

const educationalNewsData = [
    {
        title: "New Research Shows Benefits of Active Learning",
        excerpt: "Recent studies confirm that students who engage in active learning retain information better and develop stronger critical thinking skills.",
        sources: "Education Weekly",
        date: "May 15, 2023"
    }, {
        title: "Digital Literacy Now Essential in Modern Curriculum",
        excerpt: "Educators emphasize the growing importance of digital literacy skills as technology continues to reshape the learning landscape.",
        sources: "Tech & Learning",
        date: "May 10, 2023"
    }, {
        title: "Global Survey Reveals Changing Educational Priorities",
        excerpt: "A comprehensive international study highlights how educational focus is shifting toward problem-solving and creativity.",
        sources: "Global Education Review",
        date: "May 3, 2023"
    }
]

const BookData = [
    {
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        description: "Discover how embracing a growth mindset can transform your approach to learning and achievement."
    }, {
        title: "Make It Stick: The Science of Successful Learning",
        author: "Peter C. Brown",
        description: "Evidence-based techniques that can help anyone learn more effectively."
    }, {
        title: "Deep Work: Rules for Focused Success",
        author: "Cal Newport",
        description: "Learn how to develop the ability to focus without distraction on cognitively demanding tasks."
    }, {
        title: "How We Learn: The Surprising Truth",
        author: "Benedict Carey",
        description: "Revealing the science behind how our brains absorb and retain information."
    }
]

const TipsData = [
    {
        title: "Spaced Repetition",
        content: "Instead of cramming, space out your learning sessions over time. This technique improves long-term retention and understanding."
    }, {
        title: "Active Recall",
        content: "Test yourself regularly. The act of retrieving information strengthens neural pathways and improves memory."
    }, {
        title: "Teach What You Learn",
        content: "Explaining concepts to others forces you to organize your thoughts and identify gaps in your understanding."
    }, {
        title: "Connect New Information to Existing Knowledge",
        content: "Create meaningful associations between new material and things you already know to make learning more effective."
    }
]

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
                <div className="bg-white rounded-xl shadow-md p-2 gap=2 mb-6">
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
                {activeTab === "news" && <EducationalNews/>}
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

const EducationalNews = () => (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest in Education</h2>
        <div className="space-y-5">
          {educationalNewsData.map((item, index) => (
            <article key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
              <p className="text-sm text-blue-600 font-medium mb-1">{item.source}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                <a href="#">{item.title}</a>
              </h3>
              <p className="text-gray-600 mb-2">{item.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{item.date}</span>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
)

const RecommendedBooks = () => (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest in Education</h2>
        <div className="space-y-5">
          {BookData.map((item, index) => (
            <article key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
              <p className="text-sm text-blue-600 font-medium mb-1">{item.title}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                <a href="#">{item.author}</a>
              </h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <div></div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
)


const LearningTips = () => (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest in Education</h2>
        <div className="space-y-5">
          {TipsData.map((item, index) => (
            <article key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
              <p className="text-sm text-blue-600 font-medium mb-1">{item.title}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                <a href="#">{item.content}</a>
              </h3>
              <div className="flex justify-between">
                <div></div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
)

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
