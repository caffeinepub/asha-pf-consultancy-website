import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";

actor {
  let submissions = List.empty<Submission>();

  type Submission = {
    name : Text;
    mobile : Text;
    uan : ?Text;
    message : Text;
    timestamp : Time.Time;
  };

  public shared ({ caller }) func submitContactForm(name : Text, mobile : Text, uan : ?Text, message : Text) : async () {
    let newSubmission : Submission = {
      name;
      mobile;
      uan;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };
};
