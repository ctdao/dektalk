//
//  AppDelegate.h
//  dektalk-ios-client
//
//  Created by Truc C. Dao on 10/11/16.
//  Copyright © 2016 DEKTalk. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

