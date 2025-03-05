function skillsMembers() {
    let members = [
        {
            name: "John",
            skills: ["JavaScript", "React", "Node"]
        },
        {
            name: "Jane",
            skills: ["JavaScript", "Node", "Express"]
        }
    ];

    let skills = [];
    members.forEach(member => {
        skills = skills.concat(member.skills);
    });

    return skills;
}