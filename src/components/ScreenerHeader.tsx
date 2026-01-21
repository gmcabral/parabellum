export function ScreenerHeader () {
    const handleSubmit = async (e) => {
            e.preventDefault();
        }

    return (
        <section className="flex flex-col items-center m-4 align-middle justify-center">
            <form onSubmit={handleSubmit}></form>
        </section>
        )
}
