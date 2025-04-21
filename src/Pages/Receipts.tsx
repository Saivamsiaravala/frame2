import upload from "./../assets/Upload.png";
import copy from "./../assets/copy.png";
const Receipts = () => {
  return (
    <section>
      <section className="one">
        <div className="block1">
          <div className="title">Document Owner</div>
          <div className="name">Accountant 01</div>
        </div>
        <div className="block2">
          <div className="title">Client</div>
          <select name="client" id="" defaultValue="" className="client">
            <option value="" disabled className="option">
              Select Client
            </option>
            <option value="Client1">Client1</option>
            <option value="Client2">Client2</option>
            <option value="Client3">Client3</option>
          </select>
        </div>
      </section>
      <section className="two">
        <div className="block1">
          <img src={upload} alt="" className="image" />
          <div className="text">
            <div className="text1">Drag & Drop or Choose file to upload </div>
            <div className="format">JPG, PNG, PDF, CVS</div>
          </div>
        </div>
        <button className="block2">Add receipt</button>
      </section>
      <section className="three">
        <div className="email">Send Over Email</div>
        <div className="mails">
          <div className="single">
            <div>
              Single :{" "}
              <span style={{ color: "#603AE5" }}>abc.single@gmail.com</span>
            </div>
            <button>
              <img src={copy} alt="" />
            </button>
          </div>
          <div className="multiple">
            <div>
              Multiple :
              <span style={{ color: "#603AE5" }}>abc.multiple@gmail.com </span>
            </div>
            <button>
              <img src={copy} alt="" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Receipts;
