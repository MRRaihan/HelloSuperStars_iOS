class AppUrl {
  // static BaseUrl = 'http://backend.hellosuperstars.com/api/';
  // static MediaBaseUrl = 'http://backend.hellosuperstars.com/';

  // static SoketUrl = 'http://192.168.0.106:3005/';
  static SoketUrl = 'https://socket.hellosuperstars.com/';

  static BaseUrl = 'http://192.168.0.101/HelloSuperStars_Backend/public/api/';
  static MediaBaseUrl = 'http://192.168.0.101/HelloSuperStars_Backend/public/';

  // static demo instruction = 'http://your pc ip/project name on www-htdocs folder/public/';

  static UserLogin = this.BaseUrl + 'login';
  static VerifyUser = this.BaseUrl + 'verify_user';
  static CreateUser = this.BaseUrl + 'register';
  static UserInfo = this.BaseUrl + 'user_info';
  static UserActivityData = this.BaseUrl + 'user/activitiesData';
  static categoryAdd = this.BaseUrl + 'user/selected/category/store';

  static OtpVerification = this.BaseUrl + 'otp_verify';
  static VerifyToRegisterEvent = this.BaseUrl + 'verify_to_register_event';
  static SignUpInforUpdate = this.BaseUrl + 'mobile/userInformation_update';
  static AllPost = this.BaseUrl + 'user/all_post';
  static AllPostWithPagination = this.BaseUrl + 'user/all_post/with-paginate/';
  static SingleStarPost = this.BaseUrl + 'user/getAllPostWithForSingleStar/'; //star
  static SubmitLike = this.BaseUrl + 'submit_react/'; //post id

  //walet information
  static WaletInfo = this.BaseUrl + 'user/wallet/details';

  //all Packeges
  static AllPackages = this.BaseUrl + 'user/packages/all';

  //package buy
  static BuyPackages = this.BaseUrl + 'user/wallet/store';

  //join group
  // static BuyPackages = this.BaseUrl + 'user/fan/group/store'

  //fan gorup post
  static GetFanGoupDetails = this.BaseUrl + 'user/fan/group/post/show/'; //slug

  static GetPromoVideos = this.BaseUrl + 'user/PromoVideos';

  //star profile
  static LiveChatEventByStarId =
    this.BaseUrl + 'user/getAllLiveChatEventByStar/';
  static EventRegister = this.BaseUrl + 'user/event-register';
  static LiveChatSlotChecking = this.BaseUrl + 'user/getSingleLiveChatEvent/';
  static QnaSlotChecking = this.BaseUrl + 'user/getSingleQnaEvent/';

  //market place
  static MarketplaceAllPost = this.BaseUrl + 'user/marketplace/all';
  static MarketplaceOrderStore =
    this.BaseUrl + 'user/mobile-app/marketplace-store';
  static CheckPaymentUncompletedOrder =
    this.BaseUrl + 'user/mobile-app/check-payment-uncompleted-order/';
  static ViewCountry = this.BaseUrl + 'user/marketplace/view-country';
  static ViewState = this.BaseUrl + 'user/marketplace/state/';
  static ViewCity = this.BaseUrl + 'user/marketplace/city/';
  static MarketplaceOrderUpdate =
    this.BaseUrl + 'user/mobile-app/marketplace-update/';
  // Auction
  static AuctionBiddingProduct = this.BaseUrl + 'user/bidding/auction/product';
  static AuctionAllPost = this.BaseUrl + 'auction-product/all';
  static AuctionLiveBidding = this.BaseUrl + 'user/liveBidding/auction/';
  static AuctionMyBiddingHistory = this.BaseUrl + 'user/liveBidding/history/';
  static AuctionMyApply = this.BaseUrl + 'user/auctionApply/auction/';
  static AuctionGetInstruction = this.BaseUrl + 'auction-product/';
  // Get Souvenir
  static GetStarSouvenir = this.BaseUrl + 'user/souviner/view/';
  static SouvenirStore = this.BaseUrl + 'user/souvenir/apply/store/';

  //
  static LearningSessionResult = this.BaseUrl + 'learning-session/result/';

  // greetings
  static RegistrationChecker = this.BaseUrl + 'user/registration_checker/';
  static GreetingStarStatus = this.BaseUrl + 'user/greetings_star_status/';
  static GreetingRegistrationStatus =
    this.BaseUrl + 'user/greetings_registaion_status/';
  static GreetingRegistration = this.BaseUrl + 'user/greetings/register';
  static GreetingRegistrationDelete =
    this.BaseUrl + 'user/greetings_reg_delete/';
  static GreetingInfoToRegistration =
    this.BaseUrl + 'user/greeting-info-to_registration/';
  static GreetingRegistrationUpdate =
    this.BaseUrl + 'user/greetings_registaion_update';
  static GetGreetingPurposeList =
    this.BaseUrl + 'user/greetings/get_purpose_list';

  // Notification
  static CheckNotification = this.BaseUrl + 'user/check_notification/';

  static GreetingStatus = this.BaseUrl + 'user/mobile-app/greeting-status/';
  // static GreetingRegistration = this.BaseUrl + 'user/greetings/register';

  // menu
  static Menu = this.BaseUrl + 'user/mobile-app/menu';

  //upComming Events
  static UpCommingEvents = this.BaseUrl + 'user/all-upcomming-events';
  static Allcategory = this.BaseUrl + 'view-category';

  //user list
  static AlluserList = this.BaseUrl + 'mobile/all-star-list';
  static UserMediaUplad = this.BaseUrl + 'mobile/user-photo-upload';

  //join group
  static JoinGroup = this.BaseUrl + 'user/fan/group/store';

  //user group post media upload
  static GroupMedia = this.BaseUrl + 'mobile/post-media-upload';
  static OnlyMediaUpload = this.BaseUrl + 'mobile/only-media-upload';
  static PostShare = this.BaseUrl + 'user/post/share/';

  //fan group post
  static GroupPostStore = this.BaseUrl + 'user/fan/group/post/store';

  static FanGroupLike = this.BaseUrl + 'user/fan/group/post/like/'; //post id

  //chat list
  static chatList = this.BaseUrl + 'mobile/all-chat-list';

  //chat store
  static fanChatHistory = this.BaseUrl + 'mobile/fan-group-chat-history/'; //fan_group_id
  static qnaChatHistory = this.BaseUrl + 'mobile/qna-chat-history/'; //qna_register_id

  //inforamtion page info get
  static infoUpdateInforamtion = this.BaseUrl + 'user/create-user-info';

  static allStarListForSearch = this.BaseUrl + 'all-star-list';
  static postSearch = this.BaseUrl + 'search-post/'; //search

  //Audition
  static enrolledAudition = this.BaseUrl + 'user/audition/enrolled';
  static activeRounds = this.BaseUrl + 'user/audition/current_round_info/';
  static isAppealRound = this.BaseUrl + 'user/audition/is_appeal/round/';
  static getUploadedRoundVideo =
    this.BaseUrl + 'user/audition/uploaded_round_videos/';
  static AppealRegistration =
    this.BaseUrl + 'user/audition/round-appeal-registration';
  static auditionVideoUpload =
    this.BaseUrl + 'user/upload-audition-round-videos';

  static postSearch = this.BaseUrl + 'search-post/'; //search
  static fanGroupMemeberList = this.BaseUrl + 'user/fangroup-member/'; //fangroup_id
}

export default AppUrl;
