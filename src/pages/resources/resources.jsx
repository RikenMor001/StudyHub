
export const Resources = () => {
    return (
        <div className="bg-slate-100 h-screen container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-3xl font-semibold flex justify-center items-center p-5">
                    Learning Resources
                </div>
                <div className="inline-flex justify-center items-center gap-50 border border-slate-200 rounded-lg "> 
                    <div className="text-xl font-semibold traking-tight hover:cursor-pointer hover:text-slate-700">
                        Educational News 
                    </div>
                    <div className="text-xl font-semibold traking-tight hover:cursor-pointer hover:text-slate-700">
                        Recommended Books 
                    </div>
                    <div className="text-xl font-semibold traking-tight hover:cursor-pointer hover:text-slate-700">
                        Learning Tips 
                    </div>
                </div>
            </div>
        </div>
    )
}  
