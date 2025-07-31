interface LoadingProps {
  login?: string;
}
const Loading = ({ login }: LoadingProps) => {
  return (
    <>
      {login ? (
        <div className="flex items-center justify-center min-w-10">
          <div className="animate-spin rounded-full h-[20px] w-[20px] border-t-2 border-b-2 border-white"></div>
          {/* <p className="ml-4">logging...</p> */}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-[50px] w-[50px] border-t-2 border-b-2 border-accent"></div>
          <p className="ml-4">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
