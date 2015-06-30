export default function nodeSection(nodes) {
  console.log(nodes);
  // 将 nodes 按照 section id 切分
  // {section_id: {name: section_name, nodes: []}
  var sectionMap = {};
  nodes.forEach((item) => {
    var section_id = item.get('section_id');
    if(Ember.isBlank(sectionMap[section_id])) {
      sectionMap[section_id] = {
        name: item.get('section_name'),
        nodes: [item]
      };
    } else {
      sectionMap[section_id]['nodes'].push(item);
    }
  });
  return sectionMap;
}
