// Study tracker, habit builder, mental health and extra resource for staying upto date 
// Create your profile, track your progress, Get resources and proven study methods

import { Button } from "../ui/Button";
import { motion } from "framer-motion"
import { ArrowRight, BarChart, BookOpen, Brain, CheckCircle, Dumbbell, Share2, Users2 } from "lucide-react"
import { Card } from "../ui/card";
import { Link } from "react-router-dom"

const features = [
    {
        icon: <BookOpen className="h-8 w-8"/>,
        title: "Study Tracker",
        description: "Plan, track and manage your study plans like never before",
        link: "/study-tracker",
        color: "bg-blue-500/10 text-blue-500"
    },{
        icon: <Dumbbell className="h-8 w-8"/>,
        title: "Habit builder",
        description: "Build your habit and scale your academic and mental fitnes",
        link: "/habit-builder",
        color: "bg-green-500/10 text-green-500"
    },{
        icon: <Brain className="h-8 w-8"/>,
        title: "Health focus",
        description: "Now focus on your health with suggestions, changing according to your schedule",
        link: "/welness",
        color: "bg-purple-500/10 text-purple-500"
    },{
        icon: <Share2 className="h-8 w-8"/>,
        title: "Resources",
        description: "Now stay upto date with resource suggestions",
        link: "resource",
        color: "bg-orange-500/10 text-orange-500"
    }
]  

const about = [{
    title: "Create your profile",
    description: "Join the journey by signing up and achieve success through proven methods",
    icon: <CheckCircle className="h=5 w=5"/>
},{
    title: "Track your progress",
    description: "Get better everyday and see a compounding growth",
    icon: <BarChart className="h-5 w-5"/>
},{
    title: "Resources and proven methods",
    description: "Get access to recommended popular books and proven study menthods",
    icon: <Users2 className="h-5 w-5"/>
}
]

export default function LandingPage(){
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}

                <section className="relative py-20 px-4"> 
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    <div className="container mx-auto max-w-6xl relative">
                        <motion.div 
                        className="text-center"
                        initial = {{ opacity: 0, y:20 }}
                        animate = {{opacity: 1, y:1 }}
                        transition={{ duration: 0.9 }}
                        >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Transform Your Study Journey                                
                            </span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-8">Elevate your academic peformance with our intelligent study tracking habit-biling tools, and AI-powered insights</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                            size = "lg"
                            className = "h-12 px-8 border bg-blue-600 text-white border-round-md rounded-lg hover:cursor-pointer hover:bg-blue-500 borer border-blue-700"
                            >
                                Get Started Free
                            </Button>

                            <Button
                            size = "lg"
                            className = "h-12 px-8 border border-slate-300 rounded-lg hover:cursor-pointer hover:bg-slate-200"
                            >
                                Learn More
                            </Button>
                        </div>
                        </motion.div>
                    </div>                                            
                </section>

                {/* Features Section */}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto max-w-6xl px-6"> 
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                Everything You Need To Excel
                            </h2>
                            <p className="text-lg text-slate-500 font-medium">
                                Our advanced set of tools helps you stay <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">organized</span>, <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">motivated</span>, and <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">on track</span>.
                            </p>
                        </div>
                        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => (
                                <Card className = "p-5" key={feature.title}>
                                    <div className = {`${feature.color} p-3 rounded-lg w-fit mb-4`}>
                                        { feature.icon } 
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-md font-semibold mb-5">{feature.description}</p>
                                    <Link
                                    to = {feature.link}
                                    className = "hover:text-blue-700 text-blue-500 inline-flex items-center"
                                    >
                                        Learn more
                                        <ArrowRight className="h-4 w-4 ml-2"/>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/*Different section*/}
                <section className="py-20">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="flex justify-center text-3xl font-bold text-black">
                                How it works
                            </h2>
                            <p className="text-md font-semibold text-slate-500 mt-3">Get started now and upscale your journey with these advanced tools</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-7"> 
                            {about.map((abouts) => (
                                <div key={abouts.title} className="text-center">
                                    <div className="rounded-full h-12 w-12 bg-blue-300 inline-flex items-center justify-center">
                                        {abouts.icon}
                                    </div>          
                                    <h3 className="font-semibold mb-2">{abouts.title}</h3>                                  
                                    <p className="text-slate-500 font-semibold text-md">{abouts.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/*Community joining section*/}
                <section className="py-20 bg-blue-50"> 
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold">
                                Ready to transform your journey?
                            </h2>
                            <p className="text-md font-semibold text-slate-500 mt-3">Join our community of successful students and start achieving your goals through talking to likewise minded people</p>
                            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md mt-6 inline-flex items-center hover:bg-blue-500 hover:cursor-pointer">
                                Get Started Now
                                <ArrowRight className="ml-2"/>
                            </button>
                        </div>
                    </div>
                </section>

                {/*Footer section*/}
                <section className="py-20">
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <Link to={"/"} className="flex items-center">
                                    <BookOpen className="h-7 w-7"/>
                                    <span className="font-bold text-2xl ml-2 hover:text-blue-500 hover:cursor-pointer">StudyHub</span>
                                </Link>
                            </div>
                            <div className="text-lg font-bold">
                                Products
                                <p className="text-md font-light text-slate-700 hover:text-blue-500 hover:cursor-pointer">
                                    Features
                                </p>
                                <p className="text-md font-light text-slate-700 hover:text-blue-500 hover:cursor-pointer">
                                    About
                                </p>
                            </div>
                            <div className="text-lg font-bold">
                                Resources
                                <p className="text-md font-light text-slate-700 hover:text-blue-500 hover:cursor-pointer">
                                    Blog
                                </p>
                                <p className="text-md font-light text-slate-700 hover:text-blue-500 hover:cursor-pointer">
                                    Contanct
                                </p>
                            </div>
                        </div>
                    </div>  
                </section>

                {/*Copyright section*/}
                <section className="py-10  bg-blue-50">
                    <div className="text-center text-md font-semibold text-slate-500">
                        © All rights reserved. 2025 StudyHub 
                    </div>
                </section>
            </main>
        </div>
    )
}   
