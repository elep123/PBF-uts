import React from "react";
import "../css/style.css";
import images_biodata from "../images/myImages.jpeg";

const AboutStatelsss = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="main_container">
                    <div className="item">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th style={{ width: 400, textAlign: "center" }}>
                                        Images Biodata
                                </th>
                                    <th colSpan="2" style={{ textAlign: "center" }}>
                                        Detail Biodata
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="9">
                                        <img src="https://i.pinimg.com/736x/cf/e1/16/cfe116a95efa4f543861ff7790b1406b.jpg" className="image_biodata"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nama : Alif Syihan</td>
                                </tr>
                                <tr>
                                    <td>Tempat, Tanggal Lahir : </td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin : Laki - laki</td>
                                </tr>
                                <tr>
                                    <td>
                                        Alamat :
                  </td>
                                </tr>
                                <tr>
                                    <td>Agama : Islam</td>
                                </tr>
                                <tr>
                                    <td>Status : Mahasiswa</td>
                                </tr>
                                <tr>
                                    <td>Perguruan Tinggi : Politeknik Negeri Malang</td>
                                </tr>
                                <tr>
                                    <td>Hobi : </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStatelsss;