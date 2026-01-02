const itemData = [
  'Company Profile',
  'Help Center',
  'Services',
  'Plans & Pricing',
  'Team Members',
  'Contact',
];

const FooterWidgetOne = () => {
  return (
    <div className="it-footer-widget it-footer-col-2">
      <h4 className="it-footer-widget-title">Company</h4>
      <div className="it-footer-widget-menu">
        <ul>
          {itemData.map((item, i) => (
            <li key={i}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterWidgetOne;
