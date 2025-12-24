namespace db;

entity Users {
    key ID  : String(200);
    emailID : String(255);
    status  : String(20);
}

entity PackingSites {
    key ID      : String(200);
    pkgSiteName : String(255);
    pkgSiteCode : String(50);
    status      : String(20);
}

entity UserSiteAccess {
    key user_ID        : String(200);     
    key packingSite_ID : String(200);     
    status             : String(20);

    user        : Association to Users
        on user.ID = user_ID;

    packingSite : Association to PackingSites
        on packingSite.ID = packingSite_ID;
}

