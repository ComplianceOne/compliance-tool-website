const itemData = [
  'Career',
  'Leadership',
  'Press & Media',
  'Projects',
  'Marketing Services',
  'Challenge Of Project',
];

const FooterWidgetTwo = () => {
  return (
    <div className="it-footer-widget it-footer-col-3">
      <h4 className="it-footer-widget-title">Community</h4>
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
export default FooterWidgetTwo;
