import React from 'react';
import Helmet from 'react-helmet';
import Image from '../img/wash.png';
import Dis from "../img/dis.png";
import Fever from '../img/fever.png';
import Cough from "../img/cough.png";
import Mask from '../img/mask.png';
import Lung from '../img/lung.png';
import {Slide , Fade} from 'react-reveal';
const Virus = () => {
    return (
        <div className="title">
               <Helmet>
                <title>
                ویروس کرونا | چیزهایی که باید بدانیم....!


                </title>
            </Helmet>
            <Slide left duration={1500}>

          
            <h2>
                <span className="lung">
                    <img src={Lung} alt={"virus"}/>
                </span>
                چیزهایی که باید بدانیم....!

            </h2>
            </Slide>
            <Fade top>

            <div className="row virus">
                <div className="col-xs-12 col-sm-12 col-md-12 sympt">
                <div className="card">
                <div className="card-title">
                    <h5>
                    علائم کووید-19 چیست؟
                    </h5>
                    <hr/>
                    <p className="card-text">
                    تب، خستگی و سرفه‌های خشک رایج‌ترین علائم ابتلا به بیماری کووید-19 هستند. بعضی از بیماران ممکن است علائم دیگری مثل درد و کوفتگی، گرفتگی بینی، آبریزش بینی، گلودرد یا اسهال داشته باشند.

 

این علائم معمولا خفیف هستند و شروع آن‌ها تدریجی است. برخی از افراد مبتلا ممکن است هیچ یک از علائم بیماری را تجربه نکرده و احساس ناخوشی نکنند.

بیشتر مبتلایان (حدود 80 درصد) بدون نیاز به درمان خاصی بهبود پیدا می‌کنند.

تقریباً از هر 6 نفر مبتلا به کووید-19، یک نفر به شدت بیمار شده و دچار تنگی نفس می‌شود.

در سالمندان و افرادی که بیماری‌های زمینه‌ای مثل فشار خون بالا، بیماریهای قلبی یا دیابت دارند، احتمال وخامت بیماری بیشتر است.

کسانی که علائم تب، سرفه و تنگی نفس دارند باید به پزشک مراجعه کنند.
                    </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row virus">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="card">
                        <img src={Image} alt={"virus"} />
                        <div className="card-title">
                            <h5>
                                شستن مداوم دست ها
                            </h5>
                            <hr/>
                            <p className="card-text">
                                مرتب دست های خودتان را به صورت کامل با آب و صابون بشویید یا با محلولهای  ضدعفونی کننده حاوی الکل تمیز کنید .

    شستشوی دست ها با آب و صابون و استفاده از محلولهای ضدعفونی کننده حاوی الکل،ویروس های روی دست ها را از بین می برند
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="card">
                        <img src={Dis} alt={"virus"} />
                        <div className="card-title">
                            <h5>
                                فاصله (ایمن) را در اجتماعات حفظ کنید
    
                            </h5>
                            <hr/>
                            <p className="card-text">
                                از کسی که سرفه و عطسه می کند، دست کم یک متر فاصله بگیرید.

    زمانی که فردی سرفه و عطسه می کند قطرک های ریزی از دهان و بینی او به اطراف پاشیده میشود که ممکن است حاوی ویروس باشند. اگر فاصله شما با آن فرد خیلی نزدیک باشد، ممکن است شما این قطرک های حاوی ویروس کووید-19 را استنشاق کنید.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="card">
                        <img src={Fever} alt={"virus"} />
                        <div className="card-title">
                            <h5>
                                اگر تب دارید، سرفه می کنید یا به سختی نفس می کشید هرچه زودتر به دنبال مراقبت های پزشکی باشید
    
                            </h5>
                            <hr/>
                            <p className="card-text">
                                اگر احساس بیماری می کنید در خانه بمانید. اگر تب دارید و سرفه می کنید و به سختی نفس می کشید، زودتر تماس گرفته و پیگیر مراقبت های پزشکی باشید. و به توصیه های مسئولین  بهداشت و سلامت در محل زندگی  خود، عمل کنید
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade bottom>

      
            <div className="row virus" style={{
                marginTop:"3%"
            }}>
                <div className="col-xs-12 col-sm-12 col-md-7">
                    <div className="card">
                        <img src={Mask} alt={"virus"} />
                        <div className="card-title">
                            <h5>
                            چگونه ماسک بزنیم، استفاده کنیم، در بیاوریم و دور بیندازیم    
                            </h5>
                            <hr/>
                            <p className="card-text">
                            قبل از اینکه ماسک بزنید، دست­های خود را با آب و صابون بشویید یا با محلول­های الکلی ضدعفونی کنید.
دهان و بینی خود را با ماسک بپوشانید و مطمئن شوید که بین صورت شما و ماسک هیچ فاصله­ای وجود ندارد.
زمانی که از ماسک استفاده می­کنید، از دست زدن به (جلوی) ماسک پرهیز کنید؛ اگر به (جلوی) ماسک دست زدید، دست­های خود را با آب و صابون بشویید یا با محلول­های الکلی ضدعفونی کنید
به محض اینکه ماسک مرطوب شد، آن را با یک ماسک جدید تعویض کنید و از ماسک یکبار مصرف، دوباره استفاده نکنید.
برای در آوردن ماسک: بند آن را از پشت (گوش­ها) در بیاورید (به جلوی ماسک دست نزنید)؛ فوراً آن را در سطل زباله درب­دار بیندازید؛ دست­های خود را با آب و صابون بشویید یا با محلول­های الکلی ضدعفونی کنید.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5">
                    <div className="card">
                        <img src={Cough} alt={"virus"} />
                        <div className="card-title">
                            <h5>
                                بهداشت تنفسی را رعایت کنید
                            </h5>
                            <hr/>
                            <p className="card-text">
                                شما و اطرافیانتان حتما بهداشت تنفسی را رعایت کنید. بهداشت تنفسی به معنای پوشاندن دهان و بینی با آرنج خم شده یا دستمال کاغذی در هنگام عطسه و سرفه است. بعد از سرفه و عطسه بلافاصله دستمال کاغذی خود را دور بیاندازید.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>

        </div>
    );
}

export default Virus;