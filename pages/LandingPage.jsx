import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { motion } from "framer-motion"

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
                    <div className="container mx-auto"> 
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Everything You Need To Excel
                            </h2>
                            <p>
                                Our advanced set of tools helps you stay organized, motivated, and on track.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
