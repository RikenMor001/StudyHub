
export default function LandingPage(){
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="relative py-20 px-5"> 
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    <div className="container mx-auto max-w-6xl relative">
                        <h1 className="text-5xl md:text-7xl font-bold -tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            Transform Your Study Journey                                
                            </span>
                        </h1>
                    </div>                                            
                </section>
            </main>
        </div>
    )
}
