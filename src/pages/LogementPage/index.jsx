function LogementPage() {
    const logement = useLoaderData();

    return (
        <>
            <h1>{logement.title}</h1>
        </>
    );
}

export { LogementPage };