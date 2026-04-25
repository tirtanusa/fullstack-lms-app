const CoursesCard = (props) => {
  return (
    <>
      <div className="shrink-0">
        {/* image */}
        <section>
          {props.courseImage ? (
            <img
              src={props.courseImage}
              className="w-75.25 h-42.25 rounded-lg"
            />
          ) : (
            <div className="w-75.25 h-42.25 rounded-lg animate-pulse bg-gray-500"></div>
          )}
        </section>

        {/* deskripsi & judul */}
        <section className="w-75.25 flex flex-col gap-1 py-3">
          {props.title ? (
            <h3 className="font-bold">{props.title}</h3>
          ) : (
            <p className="w-50.25 bg-gray-500 h-6 rounded-lg animate-pulse"></p>
          )}

          {props.description ? (
            <p className="text-details text-sm">{props.description}</p>
          ) : (
            <p className="bg-gray-500 h-10 rounded-lg animate-pulse"></p>
          )}
        </section>
      </div>
    </>
  );
};

export default CoursesCard;
