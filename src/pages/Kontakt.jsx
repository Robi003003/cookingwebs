import React, { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({
    emri: "",
    email: "",
    telefoni: "",
    mesazhi: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({
      emri: "",
      email: "",
      telefoni: "",
      mesazhi: "",
    });
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await fetch("http://localhost:5000/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("Mesazhi u dërgua me sukses! Faleminderit që na kontaktuat.");
        setForm({
          emri: "",
          email: "",
          telefoni: "",
          mesazhi: "",
        });
      } else {
        setSuccess(data.message || "Gabim gjatë dërgimit!");
      }
    } catch (err) {
      setSuccess("Gabim gjatë dërgimit!");
    }
  };

  return (
    <main>
      <div className="contact-container">
        <div className="contact-left">
          <h2>
            <span>CONTACT</span>
            <br />
            US
          </h2>
          <p className="contact-info">CONTACT INFO · +355 XX XXX XXXX</p>
        </div>
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit} onReset={handleReset}>
          <input
            name="emri"
            value={form.emri}
            onChange={handleChange}
            placeholder="EMRI"
            required
            autoComplete="name"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="EMAIL"
            required
            autoComplete="email"
          />
          <input
            name="telefoni"
            value={form.telefoni}
            onChange={handleChange}
            placeholder="NUMRI I TELEFONIT"
            autoComplete="tel"
          />
          <textarea
            name="mesazhi"
            value={form.mesazhi}
            onChange={handleChange}
            placeholder="MESAZHI"
            required
            autoComplete="off"
          />
          <div className="form-buttons">
            <button type="reset" className="cancel-btn">
              CANCEL
            </button>
            <button type="submit" className="send-btn">
              SEND
            </button>
          </div>
          <div
            id="successMessage"
            className={success ? "active" : ""}
          >
            {success}
          </div>
        </form>
      </div>
    </main>
  );
}