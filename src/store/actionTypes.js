export const addLink = (title, url, links, children) => {
    const checked = links.every(item => item.title !== title || item.url !== url);
    if(checked){
        const newLinks = [...links, { title, url, onEdit: false, dropdown : children.length > 0, children}];
        return { type: 'ADD_LINK', payload: newLinks}
    } else {
        return { type: 'ADD_LINK', payload: links}
    }
}

export const deleteLink = (link, links) => {
    const newLinks = links.filter(i => i.title !== link.title || i.url !== link.url);
    return { type: 'ADD_LINK', payload: newLinks}
}