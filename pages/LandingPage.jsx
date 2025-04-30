import { Button } from "../ui/Button";

export default function LandingPage(){
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="relative py-20 px-5"> 
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    <div className="container mx-auto max-w-6xl relative">
                        <h1 className="text-5xl md:text-7xl font-bold -tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-primary to-purple-800 bg-clip-text text-transparent">
                                Transform Your Study Journey                                
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Elevate your academic peformance with our intelligent study tracking habit-biling tools, and AI-powered insights</p>
                        <div className="flex flex-wrap justify-center gap-8">

                            <Button
                            size = "lg"
                            className = "h-12 px-8 border bg-blue-600 text-white border-round-md rounded-lg hover:cursor-pointer hover:bg-blue-500"
                            >
                                Get Started Free  
                            </Button>

                            <Button
                            variant = "outline"
                            size = "lg"
                            className = "h-12 px-8 border border-slate-300 rounded-lg hover:cursor-pointer hover:bg-slate-200"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>                                            
                </section>
            </main>
        </div>
    )
}
