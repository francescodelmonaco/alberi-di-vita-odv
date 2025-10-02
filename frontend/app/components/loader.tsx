export default function Loader() {
    return (
        <div className="flex flex-col gap-4 w-full min-h-screen items-center justify-center">
            <div
                className="w-20 h-20 border-4 border-transparent text-(--secondary-green) text-4xl animate-spin flex items-center justify-center border-t-(--secondary-green) rounded-full"
            >
                <div
                    className="w-16 h-16 border-4 border-transparent text-(--primary-green) text-2xl animate-spin flex items-center justify-center border-t-(--primary-green) rounded-full"
                ></div>
            </div>
        </div>
    );
}