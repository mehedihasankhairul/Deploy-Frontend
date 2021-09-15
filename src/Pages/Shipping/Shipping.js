import React, { useState, useEffect } from 'react';
import NewNav from '../../Components/Shared/Navbar/NewNav';
import Footer from '../../Components/Shared/Footer/Footer';



const Shipping = () => {
    const [districts, setDistrict] = useState([''])
    useEffect(() => {
        fetch('https://bdapis.herokuapp.com/api/v1.1/districts')
        .then(response => response.json())
        .then(data => setDistrict(data))
    },[])

    console.log(districts.data)

    return (
        <div className="shipping-body">
            <NewNav />
            <div className="container">

                <div className="row mt-5 pt-5">
                    <div className="col-md-8 mb-4">
                        <div className="card mb-4 shipping-card">
                            <div className="shipping-card-header py-3">
                                <h5 className="mb-0">Billing details</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    {/* <!-- Text input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form6Example4" className="form-control" />
                                        <label className="form-label">Name</label>
                                    </div>

                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="number" id="form6Example1" className="form-control" />
                                                <label className="form-label">Phone No</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="number" id="form6Example2" className="form-control" />
                                                <label className="form-label">Alternative Phone No</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div className="row">
                                        <div className="col mb-4">
                                            <select data-validation-type="select-menu" className="custom-select" name="countryId" required="" id="js--country">
                                                <option value="1" selected="">বাংলাদেশ</option>
                                                <option value="2">ভারত</option>
                                                <option value="23">জাপান</option>
                                                <option value="13">সংযুক্ত আরব আমিরাত</option>
                                                <option value="10">যুক্তরাজ্য</option>
                                                <option value="4">মার্কিন যুক্তরাষ্ট্র</option>
                                            </select>
                                        </div>

                                        <div className="col mb-4">
                                            <select data-validation-type="select-menu" className="custom-select" name="cityId" id="js--city" required="">
                                                <option selected="" disabled="" value="">Select City</option>
                                                <option value="2" data-lang-eng="Dhaka">ঢাকা</option>
                                                <option value="4" data-lang-eng="Rajshahi">রাজশাহী</option>
                                                <option value="3" data-lang-eng="Chittagong">চট্টগ্রাম</option>
                                                <option value="6" data-lang-eng="Khulna">খুলনা</option>
                                                <option value="43" data-lang-eng="Barisal">বরিশাল</option>
                                                <option value="5" data-lang-eng="Sylhet">সিলেট</option>
                                                <option value="8" data-lang-eng="Rangpur">রংপুর</option>
                                                <option value="53" data-lang-eng="Cox's Bazar">কক্সবাজার</option>
                                                <option value="13" data-lang-eng="Kishoreganj">কিশোরগঞ্জ</option>

                                                <option value="36" data-lang-eng="Kurigram">কুড়িঁগ্রাম</option>

                                                <option value="52" data-lang-eng="Comilla">কুমিল্লা</option>
                                                <option value="68" data-lang-eng="Kushtia">কুষ্টিয়া</option>
                                                <option value="55" data-lang-eng="Khagrachari">খাগড়াছড়ি</option>
                                                <option value="35" data-lang-eng="Gaibandha">গাইবান্ধা </option>
                                                <option value="10" data-lang-eng="Gazipur">গাজীপুর</option>
                                                <option value="11" data-lang-eng="Gopalganj">গোপালগঞ্জ </option>
                                                <option value="50" data-lang-eng="Chandpur">চাঁদপুর</option>
                                                <option value="30" data-lang-eng="Chapai Nawabganj">চাঁপাইনবাবগঞ্জ</option>
                                                <option value="64" data-lang-eng="Chuadanga">চুয়াডাঙ্গা </option>
                                                <option value="27" data-lang-eng="Joypurhat">জয়পুরহাট</option>
                                                <option value="12" data-lang-eng="Jamalpur">জামালপুর </option>
                                                <option value="45" data-lang-eng="Jhalokati">ঝালকাঠি</option>
                                                <option value="66" data-lang-eng="Jhenaidah">ঝিনাইদহ</option>
                                                <option value="25" data-lang-eng="Tangail">টাঙ্গাইল</option>
                                                <option value="41" data-lang-eng="Thakurgaon">ঠাকুরগাঁও </option>
                                                <option value="34" data-lang-eng="Dinajpur">দিনাজপুর</option>
                                                <option value="28" data-lang-eng="Naogaon">নওগাঁ</option>
                                                <option value="71" data-lang-eng="Narail">নড়াইল </option>
                                                <option value="20" data-lang-eng="Narsingdi">নরসিংদী </option>
                                                <option value="29" data-lang-eng="Natore">নাটোর</option>

                                                <option value="18" data-lang-eng="Narayanganj">নারায়ণগঞ্জ</option>

                                                <option value="38" data-lang-eng="Nilphamari">নীলফামারী</option>

                                                <option value="21" data-lang-eng="Netrokona">নেত্রকোনা</option>

                                                <option value="57" data-lang-eng="Noakhali">নোয়াখালী</option>

                                                <option value="39" data-lang-eng="Panchagarh">পঞ্চগড়</option>

                                                <option value="46" data-lang-eng="Patuakhali">পটুয়াখালী</option>

                                                <option value="31" data-lang-eng="Pabna">পাবনা</option>

                                                <option value="47" data-lang-eng="Pirojpur">পিরোজপুর</option>

                                                <option value="9" data-lang-eng="Faridpur">ফরিদপুর</option>

                                                <option value="54" data-lang-eng="Feni">ফেনী</option>

                                                <option value="26" data-lang-eng="Bogra">বগুড়া</option>

                                                <option value="42" data-lang-eng="Barguna">বরগুনা</option>

                                                <option value="63" data-lang-eng="Bagerhat">বাগেরহাট&nbsp;</option>

                                                <option value="48" data-lang-eng="Bandarban">বান্দরবান</option>

                                                <option value="49" data-lang-eng="Brahmanbaria">ব্রাহ্মণবাড়িয়া</option>

                                                <option value="44" data-lang-eng="Bhola">ভোলা</option>

                                                <option value="17" data-lang-eng="Mymensingh">ময়মনসিংহ</option>

                                                <option value="69" data-lang-eng="Magura">মাগুরা</option>

                                                <option value="14" data-lang-eng="Madaripur">মাদারীপুর</option>

                                                <option value="15" data-lang-eng="Manikganj">মানিকগঞ্জ</option>

                                                <option value="16" data-lang-eng="Munshiganj">মুন্সিগঞ্জ</option>

                                                <option value="70" data-lang-eng="Meherpur">মেহেরপুর</option>

                                                <option value="60" data-lang-eng="Maulvibazar">মৌলভী বাজার </option>

                                                <option value="65" data-lang-eng="Jessore">যশোর</option>

                                                <option value="58" data-lang-eng="Rangamati">রাঙ্গামাটি </option>

                                                <option value="22" data-lang-eng="Rajbari">রাজবাড়ী</option>

                                                <option value="56" data-lang-eng="Lakshmipur">লক্ষ্মীপুর</option>

                                                <option value="37" data-lang-eng="Lalmonirhat">লালমনিরহাট</option>

                                                <option value="23" data-lang-eng="Shariatpur">শরিয়তপুর</option>

                                                <option value="24" data-lang-eng="Sherpur">শেরপুর</option>

                                                <option value="72" data-lang-eng="Satkhira">সাতক্ষীরা  </option>

                                                <option value="33" data-lang-eng="Sirajgonj">সিরাজগঞ্জ</option>

                                                <option value="61" data-lang-eng="Sunamganj">সুনামগঞ্জ </option>

                                                <option value="59" data-lang-eng="Habiganj">হবিগঞ্জ</option>

                                            </select>

                                        </div>
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form6Example5" className="form-control" />
                                        <label className="form-label" >Email</label>
                                    </div>

                                    {/* <!-- Text input --> */}
                                    <div className="form-outline mb-4">
                                    <textarea className="form-control" 
                                    id="form6Example7" 
                                    rows="4"></textarea>
                                        <label className="form-label" >Address</label>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="shipping-card mb-4">
                            <div className="shipping-card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$53.98</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>$0.02</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>$54.00</strong></span>
                                    </li>
                                </ul>

                                <button type="button" className="btn btn-success btn-lg btn-block">
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shipping;