const doctors = [
  {
    name: "Dr. Chen Wei",
    specialty: "Кардиология",
    experience: "25 лет",
    languages: "Chinese, English, Japanese",
    qualification: "MD, FACC",
    avatar: "CW",
  },
  {
    name: "Dr. Liu Ming",
    specialty: "Гастроэнтерология",
    experience: "18 лет",
    languages: "Chinese, English",
    qualification: "MD, Board Certified",
    avatar: "LM",
  },
  {
    name: "Dr. Wang Hui",
    specialty: "Дерматология",
    experience: "15 лет",
    languages: "Chinese, English, Korean",
    qualification: "MD, PhD",
    avatar: "WH",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Наши <span className="text-primary">врачи</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className="bg-card border border-border rounded-2xl p-6 text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{doctor.avatar}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
              <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Опыт:</span> {doctor.experience}</p>
                <p><span className="font-medium text-foreground">Квалификация:</span> {doctor.qualification}</p>
                <p><span className="font-medium text-foreground">Языки:</span> {doctor.languages}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
