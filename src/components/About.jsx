import {
  FaCarSide,
  FaBriefcase,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <h2>من نحن</h2>

      <p className="about-text">
        في ELSAWY لتأجير السيارات نقدم حلول تأجير احترافية للأفراد والشركات
        بأسطول حديث وخدمة موثوقة تلبي جميع احتياجات التنقل.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <FaCarSide />
          <h3>تأجير السيارات</h3>
          <p>تأجير السيارات بسائق أو بدون سائق وفق احتياجاتك.</p>
        </div>

        <div className="about-card">
          <FaBriefcase />
          <h3>خدمة رجال الأعمال</h3>
          <p>تنقلات رسمية وخدمات مخصصة لرجال الأعمال والشركات.</p>
        </div>

        <div className="about-card">
          <FaHandshake />
          <h3>التعاقد مع الشركات</h3>
          <p>أسعار خاصة وعقود مرنة للشركات والمؤسسات.</p>
        </div>

        <div className="about-card">
          <FaHeadset />
          <h3>دعم متواصل</h3>
          <p>فريق خدمة عملاء جاهز لمساعدتك على مدار الساعة.</p>
        </div>

      </div>
    </section>
  );
}

export default About;