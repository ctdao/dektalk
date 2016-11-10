//
//  ViewController.h
//  dektalk-ios-client
//
//  Created by Truc C. Dao on 10/11/16.
//  Copyright © 2016 DEKTalk. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "RestCommClient.h"

@interface ViewController : UIViewController<RCDeviceDelegate,RCConnectionDelegate>
//- (void)disconnect;

@property (nonatomic,retain) RCDevice* device;
@property (nonatomic,retain) RCConnection* connection;
@property NSMutableDictionary * parameters;
@property BOOL isInitialized;
@property BOOL isRegistered;


@end

