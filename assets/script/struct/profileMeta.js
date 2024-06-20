class ProfileMeta{
    
    constructor(profileID, profileName, enableOnStart, sites, timing,override) {
        
        this.profileID = profileID;
        this.profileName = profileName;
        this.enableOnStart = enableOnStart;
        
        this.sites = sites;
        this.timing = timing;
        this.override = override;
    }
}