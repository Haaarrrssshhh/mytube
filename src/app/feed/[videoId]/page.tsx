export default async function Page(props: { params: Promise<{ videoId: string }> }) {
    const { videoId } = await props.params;
    return(
        <div> 
            Video Id : {videoId}
        </div>
    );
};
