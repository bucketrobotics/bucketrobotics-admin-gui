import { Children, useState } from "react";
import "./Tab.css";

function TabController(props) {
    var [selectedTab, setSelectedTab] = useState(0);

    return (
        <div>
            <div className="tab">
                {Children.map(props.children, (x, i) => <button className={i === selectedTab ? "active" : ""} type="button" onClick={() => setSelectedTab(i)}>{x.props.name}</button>)}
            </div>
            <div className="tabcontent">
                {props.children[selectedTab].props.children}
            </div>
        </div>
    );
}

function TabPage() { }

export { TabController, TabPage }