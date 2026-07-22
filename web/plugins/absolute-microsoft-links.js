module.exports = function absoluteMicrosoftLinks() {
  return function transformer(tree) {
    const visit = (node) => {
      if (!node || typeof node !== "object") {
        return;
      }

      if (node.type === "link" && typeof node.url === "string" && node.url.startsWith("/en-us/")) {
        node.url = `https://learn.microsoft.com${node.url}`;
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
};
