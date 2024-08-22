import React from "react";

export const About = (props) => {
  return (

    <div id="about">
      
      <div className="container">
        
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>انشئ</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h2>تأكيد الحساب</h2>

              <p>{props.data ? props.data.paragraph : "loading..."}</p>

            </div>
          </div>
        </div>
        
      </div>
      <div className="container" id="container2">
        
        <div className="row">
      
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>تفاصيل الحساب</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h2>تسجيل الدخول</h2>

              <p>{props.data ? props.data.paragraph : "loading..."}</p>

            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src="img/about2.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
        
      </div>
      <div className="container" id="container2">
        
        <div className="row">
        <div className="col-xs-12 col-md-6">
            <img src="img/about3.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>الأشتراكات إعدادات الحساب</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h2>أنشر خدماتك أو منتجاتك</h2>

              <p>{props.data ? props.data.paragraph : "loading..."}</p>

            </div>
          </div>
        
        </div>
        
      </div>
    </div>
  );
};
