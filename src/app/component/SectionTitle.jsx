const SectionTitle = ({head, title, para}) => {
    return (
        <div>
            <div className="text-center mt-12 lg:mt-32">
        <h5 className="vibes text-3xl text-[#EA6A12] mt-6">{head}</h5>
        <h1 className="text-4xl font-extrabold mt-6">{title}</h1>
        <p className="leading-7 opacity-80 mt-3 lg:w-2/3 mx-auto border-b-2  border-dashed md:mb-16 mb-8 md:pb-8 pb-6">{para}</p>
      </div>
        </div>
    );
};

export default SectionTitle;