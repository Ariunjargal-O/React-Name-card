import Image from "next/image";
import styles from "./page.module.css";
const users = [
  {
    name: "Ariunjargal",
    role: "Developer",
    phoneNumber: "12345678",
    email: "jargal@gmail.com",
    address: "SHDistrict 17 khoroo",
    companyName: "PineAri"
  },
  {
    name: "Bayar",
    role: "Designer",
    phoneNumber: "23456789",
    email: "bayar@gmail.com",
    address: "SHDistrict 18 khoroo",
    companyName: "BAYARDES"
  },
  {
    name: "Chuluun",
    role: "Project Manager",
    phoneNumber: "34567890",
    email: "chuluun@gmail.com",
    address: "SHDistrict 19 khoroo",
    companyName: "KHAS LLC"
  },
  {
    name: "Davaa",
    role: "QA Engineer",
    phoneNumber: "45678901",
    email: "davaa@gmail.com",
    address: "SHDistrict 20 khoroo",
    companyName: "KHAS LC"
  },
  {
    name: "Erdene",
    role: "Backend Developer",
    phoneNumber: "56789012",
    email: "erdene@gmail.com",
    address: "SHDistrict 21 khoroo",
    companyName: "PineBa"
  },
  {
    name: "Gantulga",
    role: "Frontend Developer",
    phoneNumber: "67890123",
    email: "gantulga@gmail.com",
    address: "SHDistrict 22 khoroo",
    companyName: "Pld LLC"
  },
  {
    name: "Hassan",
    role: "UX/UI Designer",
    phoneNumber: "78901234",
    email: "hassan@gmail.com",
    address: "SHDistrict 23 khoroo",
    companyName: "PiNEllc"
  },
  {
    name: "Ilyas",
    role: "Data Scientist",
    phoneNumber: "89012345",
    email: "ilyas@gmail.com",
    address: "SHDistrict 24 khoroo",
    companyName: "HASLLS"
  },
  {
    name: "Jargal",
    role: "Security Engineer",
    phoneNumber: "90123456",
    email: "jargal.security@gmail.com",
    address: "SHDistrict 25 khoroo",
    companyName: "NARAN"
  },
  {
    name: "Khuslen",
    role: "DevOps Engineer",
    phoneNumber: "01234567",
    email: "khuslen@gmail.com",
    address: "SHDistrict 26 khoroo",
    companyName: "NOMIN HL"
  },
  {
    name: "Lkhagva",
    role: "Product Manager",
    phoneNumber: "12345679",
    email: "lkhagva@gmail.com",
    address: "SHDistrict 27 khoroo",
    companyName: "ATG DEV"
  },
  {
    name: "Munkhbayar",
    role: "Content Strategist",
    phoneNumber: "23456780",
    email: "munkhbayar@gmail.com",
    address: "SHDistrict 28 khoroo",
    companyName: "MGL radio"
  },
  {
    name: "Nomin",
    role: "Marketing Manager",
    phoneNumber: "34567891",
    email: "nomin@gmail.com",
    address: "SHDistrict 29 khoroo",
    companyName: "Tesla"
  },
  {
    name: "Oyun",
    role: "Sales Representative",
    phoneNumber: "45678902",
    email: "oyun@gmail.com",
    address: "SHDistrict 30 khoroo",
    companyName: "Darkhan"
  },
  {
    name: "Khuygaa",
    role: "System Administrator",
    phoneNumber: "56789013",
    email: "pjotr@gmail.com",
    address: "SHDistrict 31 khoroo",
    companyName: "ENKHDUL"
  },
  {
    name: "Kara",
    role: "HR Specialist",
    phoneNumber: "67890124",
    email: "qara@gmail.com",
    address: "SHDistrict 32 khoroo",
    companyName: "MLC LLC"
  },
  {
    name: "Renchin",
    role: "Software Architect",
    phoneNumber: "78901235",
    email: "renchin@gmail.com",
    address: "SHDistrict 33 khoroo",
    companyName: "MyFul"
  },
  {
    name: "Saruul",
    role: "Front-end Developer",
    phoneNumber: "89012346",
    email: "saruul@gmail.com",
    address: "SHDistrict 34 khoroo",
    companyName: "Gzarchin"
  }
]

function Card(props) {
  console.log(props)
  return (
    <div className="card-flex">
      <div className="card">
        <p className="name-text">{props.users.name}</p>
        <p className="job">{props.users.role}</p>
        <div className="address">
          <div id="flex">
            <img src="phone.png"></img>
            <p>{props.users.phoneNumber}</p></div>
          <div id="flex">
            <img src="mail.png"></img>
            <p>{props.users.email}</p>
          </div>
          <div id="flex">
            <img src="map.png"></img>
            <p>{props.users.address}</p>
          </div>

          <div className="imgdev">
            <img className="logoback" src="Shape.png"></img>
            <div>
              <img className="name-logo" src="logo.png"></img>
              <p className="co-name">
                {props.users.companyName}
              </p>
            </div>
            <img className="qr" src="Qr-code.png"></img>
          </div>
        </div>
      </div>
      <div className="card-back">
        <img className="backlogo" src="Logo.png"></img>
        <p className="back-name">
          {props.users.companyName}</p>
        <img className="backline
      " src="backline.png"></img>
      </div>
    </div>
  )
}

export default function Home() {
  const cards = [];
  for (let i = 0; i < users.length; i++) {
    cards.push(<Card users={users[i]}></Card>)

  }


  return (
    <div className="cointainer">
      {cards}
    </div>


  );
}
