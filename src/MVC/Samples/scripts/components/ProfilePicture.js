const ProfilePicture = {
    init(profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    },
    build() {
        return `
            <div>
                <img src="${this.profilePictureUrl}">
            </div>
        `;
    }
};

export default ProfilePicture;
