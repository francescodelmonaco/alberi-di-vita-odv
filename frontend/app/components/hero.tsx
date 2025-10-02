export default function Hero({ pageName, pageDescription }: { pageName: string, pageDescription: string }) {
    return (
        <section className="py-10 lg:py-16 bg-(--primary-green)">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                        {pageName}
                    </h1>

                    <p className="text-lg text-(--third-white) leading-relaxed">
                        {pageDescription}
                    </p>
                </div>
            </div>
        </section>
    );
}