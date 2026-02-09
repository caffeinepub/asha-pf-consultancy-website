import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Contact form submission type
  public type Submission = {
    name : Text;
    mobile : Text;
    uan : ?Text;
    message : Text;
    timestamp : Time.Time;
  };

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  // Mutable state for submissions
  var submissions : List.List<Submission> = List.empty();

  // User profiles storage
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Public contact form submission - accessible to everyone including anonymous users
  public shared ({ caller }) func submitContactForm(name : Text, mobile : Text, uan : ?Text, message : Text) : async () {
    if (name.isEmpty() or mobile.isEmpty() or message.isEmpty()) {
      Runtime.trap("Name, mobile, and message fields cannot be empty");
    };

    let newSubmission : Submission = {
      name;
      mobile;
      uan;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  // Admin-only: View all contact form submissions
  public query ({ caller }) func getAllContacts() : async [Submission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };

    submissions.toArray();
  };

  // User profile management functions

  // Get the caller's own profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // Get any user's profile (own profile or admin viewing others)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Save the caller's profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
